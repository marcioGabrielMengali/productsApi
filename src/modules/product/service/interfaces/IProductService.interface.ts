import { IFindalAllProducstResponseDto, IFindAllRequestProductsDto } from "../../dto/product.dto";

export interface IProductService {
    findAll(parameters: IFindAllRequestProductsDto): Promise<IFindalAllProducstResponseDto>
}