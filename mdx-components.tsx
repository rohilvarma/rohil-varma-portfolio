import { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

const components = {
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    const isCodeBlock = (children as string).includes("\n");
    return isCodeBlock ? (
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    ) : (
      <em className="" dangerouslySetInnerHTML={{ __html: codeHTML }}></em>
    );
  },
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
