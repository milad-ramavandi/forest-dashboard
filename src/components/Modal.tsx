import type { IModalProps } from "@/types"
import { Button } from "./ui/button"

const Modal = ({ closeModal, children }: IModalProps) => {
  return (
    <div className="fixed inset-0 top-0 left-0 z-20 flex h-screen w-screen items-center justify-center space-y-8 backdrop-blur-xs">
      <div className="flex flex-col gap-2">
        <div>
          <Button onClick={() => closeModal()}>Close</Button>
        </div>
        <div className="z-50 min-w-xl">{children}</div>
      </div>
    </div>
  )
}

export default Modal
