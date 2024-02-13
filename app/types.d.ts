/**
 * @description helper type for classname args
 * @example <Button className={({ active, disabled }) => `my-class ${active?"my-active-class":"" ${disabled?"my-disabled-class":""}}`} />
 * where className is of type ClassName<{active: boolean; disabled: boolean }>
 **/
export type ClassName<T = never> = string | ((args: T) => string);

/** type for navbar links */
export type HeaderLink = { href: string; label: string | (() => React.ReactNode) };
