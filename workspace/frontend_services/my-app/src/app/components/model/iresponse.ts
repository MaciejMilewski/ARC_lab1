import { IShoes } from './ishoes';
import { IRope } from './irope';
import { IKnife } from './iknife';
import { IDvd } from './idvd';

export interface IResponse{
    id: string;
    details: IShoes | IKnife | IRope | IDvd;
}