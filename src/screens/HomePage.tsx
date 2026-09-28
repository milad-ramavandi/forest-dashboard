import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { QUANTITATIVE_FEATURES } from "@/constants"

const HomePage = () => {
  return (
    <section className="space-y-8">
      <h1 className="text-center text-2xl font-light tracking-widest md:text-3xl lg:text-4xl">
        <span className="text-sm md:text-lg">WELCOME TO</span>
        <br />
        <p className="mt-2">Forest Intelligence Dashboard</p>
      </h1>
      <div className="space-y-8">
        <section className="space-y-2">
          <h2 className="text-xl font-light">1. Project Overview</h2>
          <p>
            Forest Intelligence Dashboard is a data analysis and machine
            learning project focused on understanding forest environments and
            predicting forest cover types.
          </p>
          <p>
            The dashboard explores environmental and cartographic data, presents
            key dataset statistics and visualizations, and provides a machine
            learning model that predicts the most likely forest cover type based
            on selected terrain and environmental features.
          </p>
          <p>
            The project combines data exploration, visualization, and predictive
            modeling in an interactive web application.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-light">2. Dataset</h2>
          <p>
            This project uses the Forest Cover Type dataset, which contains
            cartographic and environmental information collected for forested
            areas in the United States.
          </p>
          <div className="space-y-2">
            <p>The dataset includes:</p>
            <ul className="ml-8 list-disc">
              <li>
                <span className="font-semibold">581,012</span> observations
              </li>
              <li>
                <span className="font-semibold">54</span> input features
              </li>
              <li>
                <span className="font-semibold">1</span> target feature
              </li>
              <li>
                <span className="font-semibold">7</span> forest cover classes
              </li>
            </ul>
            <p>
              Each observation represents a 30 × 30 meter land area. The input
              features describe terrain conditions, distances to environmental
              features, and categorical information about wilderness areas and
              soil types.
            </p>
          </div>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-light">3. Problem Statement</h2>
          <p>
            Forest environments vary according to elevation, slope, sunlight
            exposure, soil composition, and their proximity to natural and
            human-made features.
          </p>
          <p>
            The goal of this project is to investigate how these environmental
            characteristics relate to forest cover types and to build a model
            that can predict the cover type from the available features.
          </p>
          <p>
            This is a multiclass classification problem: given the environmental
            and cartographic characteristics of an area, the model predicts one
            of seven forest cover types.
          </p>
          <p>
            The project also provides visual tools to explore the dataset and
            better understand the distribution and relationships of its
            features.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-light">
            4. Understanding the Dataset Features
          </h2>
          <p>
            The dataset contains 54 input features, which can be divided into
            three main groups.
          </p>
          <div className="space-y-8 px-4">
            <section className="space-y-4">
              <h3 className="text-lg font-light">
                A. Quantitative Features — 10 Columns
              </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {QUANTITATIVE_FEATURES.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{item.feature}</TableCell>
                        <TableCell>{item.description}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </section>
            <section className="space-y-4">
              <h3 className="text-lg font-light">
                B. Wilderness Area Features — 4 Columns
              </h3>
              <p>
                These are binary indicator columns that identify the wilderness
                area associated with each observation.
              </p>
              <ul className="list-disc pl-8">
                <li>Wilderness_Area1</li>
                <li>Wilderness_Area2</li>
                <li>Wilderness_Area3</li>
                <li>Wilderness_Area4</li>
              </ul>
              <p>
                Each observation belongs to one of the four wilderness areas.
                The corresponding column is set to 1, while the others are set
                to 0.
              </p>
            </section>
            <section className="space-y-4">
              <h3 className="text-lg font-light">
                C. Soil Type Features — 40 Columns
              </h3>
              <p>These are binary indicator columns representing soil types.</p>
              <ul className="list-disc pl-8">
                <li>Soil_Type1</li>
                <li>Soil_Type2</li>
                <li>...</li>
                <li>Soil_Type40</li>
              </ul>
              <p>
                Each column indicates whether the observation is associated with
                a particular soil type. These features help represent
                differences in soil conditions across forested areas.
              </p>
            </section>
          </div>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-light">5. Target Variable(Cover Type)</h2>
          <p>
            The target column is Cover_Type. It identifies the forest cover
            category that the model is trained to predict.
          </p>
          <p>The target contains seven classes:</p>
          <ol className="list-decimal pl-8">
            <li>Spruce/Fir</li>
            <li>Lodgepole Pine</li>
            <li>Ponderosa Pine</li>
            <li>Cottonwood/Willow</li>
            <li>Aspen</li>
            <li>Douglas-fir</li>
            <li>Krummholz</li>
          </ol>
          <p>
            The model uses the 54 input features to predict one of these seven
            classes.
          </p>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-light">6. Project Workflow</h2>
          <ol className="list-decimal pl-8">
            <li>
              <span className="font-semibold">Explore the Data</span> — Review
              the dataset structure, feature types, and class distribution.
            </li>
            <li>
              <span className="font-semibold">Analyze the Features</span> —
              nvestigate patterns and relationships among environmental
              variables.
            </li>
            <li>
              <span className="font-semibold">Visualize the Results</span> —
              Present important statistics and data patterns through charts.
            </li>
            <li>
              <span className="font-semibold">Predict Forest Cover</span> — Use
              a trained machine learning model to predict a cover type from
              user-provided features.
            </li>
          </ol>
        </section>
        <section className="space-y-2">
          <h2 className="text-xl font-light">7. Technology Stack</h2>
          <ul className="list-disc pl-8">
            <li>
              <span className="font-semibold">Frontend</span>: React,
              TypeScript, Vite, shadcn/ui
            </li>
            <li>
              <span className="font-semibold">Backend</span>: Python, FastAPI
            </li>
            <li>
              <span className="font-semibold">Data Analysis</span>:
              Scikit-learn, Pandas
            </li>
          </ul>
        </section>
      </div>
    </section>
  )
}

export default HomePage
