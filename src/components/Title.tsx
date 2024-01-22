import { useEffect } from "react";

export default function Title(text: string) {
  useEffect(() => {
    document.title = text;
  });
}
