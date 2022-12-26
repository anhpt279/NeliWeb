declare module "*.jpg";
declare module "*.png";
declare module "*.gif";

// Declare png modules
declare module '*.png' {
  const content: StaticImageData;
  export default content;
}

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  placeholder?: string;
};

declare module '*.gif' {
  const content: StaticImageData;
  export default content;
};