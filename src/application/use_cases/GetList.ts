import { List }  from '../../domain/ListRepository';

export default class {
    getChapters(ListRepository: List) {
        return ListRepository.getChapters();
    }

    getChapter(id:number|string, ListRepository: List){
        return ListRepository.getChapter(id);
    }
} 