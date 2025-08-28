interface WindowEnv {
  [key: string]: string | undefined;
}

declare global {
  interface Window {
	env: WindowEnv;
  }
}

console.log(import.meta.env)
export const env = { ...import.meta.env, ...window["env"] };