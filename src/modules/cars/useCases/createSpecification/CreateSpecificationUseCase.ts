import Specification from '../../models/Specification';
import ISpecificationsRepository from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  public execute({ name, description }: IRequest): Specification {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name,
    );

    if (specificationAlreadyExists) {
      throw new Error('Specification already exists.');
    }

    const specification = this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export default CreateSpecificationUseCase;
