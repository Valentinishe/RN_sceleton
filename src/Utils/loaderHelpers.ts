import { LoadersType, LoaderType } from '@Types/models/tools/Loader';

export function isLoading(loaders: LoadersType = [], loader: LoaderType): boolean {
  return loaders.includes(loader);
}
