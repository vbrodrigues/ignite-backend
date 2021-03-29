import Specification from '../models/Specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export default interface ISpecificationsRepository {
  create(data: ICreateSpecificationDTO): Specification;
  findByName(name: string): Specification | undefined;
}
