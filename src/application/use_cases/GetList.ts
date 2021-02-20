import { List }  from '../../domain/ListRepository';

export default (ListRepository: List) => {
    return ListRepository.getList();
}