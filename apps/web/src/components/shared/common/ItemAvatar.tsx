import { cn } from "@/lib";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui";

interface Props {
  className?: string;
  image: string;
}

export const ItemAvatar = ({ className, image }: Props) => {
  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={image} alt={image} />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  );
};
