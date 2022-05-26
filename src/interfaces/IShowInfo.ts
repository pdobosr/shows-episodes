import { IEpisode } from "./IEpisode";
import { IShow } from "./IShow";

export interface IShowInfo extends IShow {
  episodes: IEpisode[];
}
