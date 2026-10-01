import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Controller, useForm, type SubmitHandler } from "react-hook-form"
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SOIL_TYPE, WILDERNESS_AREA } from "@/constants"
import { Button } from "@/components/ui/button"
import { useMutation } from "@tanstack/react-query"
import controllers from "@/apis/controllers"
import { Spinner } from "@/components/ui/spinner"
import React, { useState } from "react"
import Modal from "@/components/Modal"
import { TrendingUpDown } from "lucide-react"

const validationSchema = Yup.object().shape({
  elevation: Yup.number()
    .positive("Elevation must be a positive number")
    .required("Elevation is required."),
  slope: Yup.number()
    .positive("Slope must be a positive number")
    .required("Slope is required."),
  aspect: Yup.number()
    .positive("Aspect must be a positive number")
    .required("Aspect is required."),
  horizontal_distance_to_hydrology: Yup.number()
    .positive("Horizontal Distance to Hydrology must be a positive number")
    .required("Horizontal Distance to Hydrology is required."),
  vertical_distance_to_hydrology: Yup.number()
    .positive("Vertical Distance to Hydrology must be a positive number")
    .required("Vertical Distance to Hydrology is required."),
  horizontal_distance_to_roadways: Yup.number()
    .positive("Horizontal Distance to Roadways must be a positive number")
    .required(" Horizontal Distance to Roadways is required."),
  horizontal_distance_to_fire_points: Yup.number()
    .positive("Horizontal Distance to Fire Points must be a positive number")
    .required("Horizontal Distance to Fire Points is required."),
  hillshade_9am: Yup.number()
    .positive("Hillshade 9am must be a positive number")
    .required("Hillshade 9am is required."),
  hillshade_noon: Yup.number()
    .positive("Hillshade noon must be a positive number")
    .required("Hillshade noon is required."),
  hillshade_3pm: Yup.number()
    .positive("Hillshade 3pm must be a positive number")
    .required("Hillshade 3pmis required."),
  wilderness_area: Yup.string().required("Wilderness Area is required."),
  soil_type: Yup.string().required("Soil Type is required."),
})

type TInputsForm = Yup.InferType<typeof validationSchema>

const defaultValues: TInputsForm = {
  elevation: 0,
  slope: 0,
  aspect: 0,
  horizontal_distance_to_hydrology: 0,
  vertical_distance_to_hydrology: 0,
  horizontal_distance_to_roadways: 0,
  horizontal_distance_to_fire_points: 0,
  hillshade_9am: 0,
  hillshade_noon: 0,
  hillshade_3pm: 0,
  wilderness_area: "",
  soil_type: "",
}

const PredictPage = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const form = useForm<TInputsForm>({
    resolver: yupResolver(validationSchema),
    defaultValues,
  })
  const { mutate, isPending, data } = useMutation({
    mutationFn: (data: TInputsForm) => controllers.createPredict(data),
    onSuccess() {
      form.reset()
      setIsOpenModal(true)
    },
  })

  const onSubmit: SubmitHandler<TInputsForm> = async (data: TInputsForm) => {
    mutate(data)
  }
  const handleCloseModal = () => setIsOpenModal(false)
  return (
    <React.Fragment>
      <section className="space-y-20">
        <h1 className="text-center text-2xl font-light tracking-widest md:text-3xl lg:text-4xl">
          <span className="text-sm md:text-lg">Predict Forest Cover Type</span>
          <br />
          <p className="mt-2">
            Enter forest environmental and cartographic features to predict the
            most likely forest cover type.
          </p>
        </h1>
        <Card className="mx-auto max-w-3xl p-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FieldGroup className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <Controller
                name="elevation"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="elevation">Elevation</FieldLabel>
                    <FieldDescription>Elevation in meters</FieldDescription>
                    <Input
                      {...field}
                      id="elevation"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Elevation like 1980"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="slope"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="slope">Slope</FieldLabel>
                    <FieldDescription>Slope in degrees</FieldDescription>
                    <Input
                      {...field}
                      id="slope"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Slope like 40"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="aspect"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="aspect">Aspect</FieldLabel>
                    <FieldDescription>
                      Aspect in azimuth degrees
                    </FieldDescription>
                    <Input
                      {...field}
                      id="aspect"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Aspect like 30"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="horizontal_distance_to_hydrology"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="horizontal_distance_to_hydrology">
                      Horizontal Distance to Hydrology
                    </FieldLabel>
                    <FieldDescription>
                      Horizontal distance to nearby water features
                    </FieldDescription>
                    <Input
                      {...field}
                      id="horizontal_distance_to_hydrology"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Horizontal Distance to Hydrology like 80"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="vertical_distance_to_hydrology"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="vertical_distance_to_hydrology">
                      Vertical Distance to Hydrology
                    </FieldLabel>
                    <FieldDescription>
                      Vertical distance to nearby water features
                    </FieldDescription>
                    <Input
                      {...field}
                      id="vertical_distance_to_hydrology"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Vertical Distance to Hydrology like 190"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="horizontal_distance_to_roadways"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="horizontal_distance_to_roadways">
                      Horizontal Distance to Roadways
                    </FieldLabel>
                    <FieldDescription>
                      Horizontal distance to nearby roadways
                    </FieldDescription>
                    <Input
                      {...field}
                      id="horizontal_distance_to_roadways"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Horizontal Distance to Roadways like 1980"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="horizontal_distance_to_fire_points"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="horizontal_distance_to_fire_points">
                      Horizontal Distance to Fire Points
                    </FieldLabel>
                    <FieldDescription>
                      Horizontal distance to nearby wildfire ignition points
                    </FieldDescription>
                    <Input
                      {...field}
                      id="horizontal_distance_to_fire_points"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Horizontal Distance to Fire Points like 1980"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="hillshade_9am"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="hillshade_9am">
                      Hillshade 9am
                    </FieldLabel>
                    <FieldDescription>
                      Hillshade index measured at 9 AM
                    </FieldDescription>
                    <Input
                      {...field}
                      id="hillshade_9am"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Elevation like 80"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="hillshade_noon"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="hillshade_noon">
                      Hillshade noon
                    </FieldLabel>
                    <FieldDescription>
                      Hillshade index measured at noon
                    </FieldDescription>
                    <Input
                      {...field}
                      id="hillshade_noon"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Hillshade noon like 90"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="hillshade_3pm"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="hillshade_3pm">
                      Hillshade 3pm
                    </FieldLabel>
                    <FieldDescription>
                      Hillshade index measured at 3 PM
                    </FieldDescription>
                    <Input
                      {...field}
                      id="hillshade_3pm"
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter Hillshade 3pm like 10"
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="wilderness_area"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="wilderness_area">
                      Wilderness Area
                    </FieldLabel>
                    <Select
                      id="wilderness_area"
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select Wilderness Area" />
                      </SelectTrigger>
                      <SelectContent>
                        {WILDERNESS_AREA.map((area) => (
                          <SelectItem key={area} value={area}>
                            {area.replace("_", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="soil_type"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="soil_type">Soil Type</FieldLabel>
                    <Select
                      id="soil_type"
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select Soil Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {SOIL_TYPE.map((soil) => (
                          <SelectItem key={soil} value={soil}>
                            {soil.replace("_", " ")}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button type="submit" disabled={isPending}>
                {isPending && <Spinner data-icon="inline-start" />}
                Submit
              </Button>
            </Field>
          </form>
        </Card>
      </section>
      {isOpenModal && (
        <Modal closeModal={handleCloseModal}>
          <Card className="w-full p-4">
            <CardHeader className="flex items-center gap-4">
              <TrendingUpDown className="text-muted-foreground"/>
              <CardTitle>Predicted Forest Cover Type</CardTitle>
            </CardHeader>
            <CardContent>Cover Type: {data?.Cover_Type}</CardContent>
          </Card>
        </Modal>
      )}
    </React.Fragment>
  )
}

export default PredictPage
