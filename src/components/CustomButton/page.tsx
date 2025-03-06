'use client';
import { Button } from "../ui/button";

interface UserButtonProps {
  onClick: () => void;
  children?: React.ReactNode
}

const CustomButton = ({
  onClick,
  children
}: UserButtonProps) => {
  return (
    <Button
    variant='ghost'
    size='icon'
    className="px-0 gap-0"
    onClick={onClick}>
      {children}
    </Button>
  )
}

export default CustomButton
