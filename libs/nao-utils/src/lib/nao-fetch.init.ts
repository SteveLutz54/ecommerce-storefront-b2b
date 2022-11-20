import { NaoFetchClass } from './nao-fetch.class';
import { NaoDataInterface } from "@naologic/nao-utils";

/**
 * Create a new Nao Fetch
 */
export function naoFetchInit(initData?: Partial<NaoDataInterface.SelectFetchers>): NaoFetchClass {
  return new NaoFetchClass(initData);
}
