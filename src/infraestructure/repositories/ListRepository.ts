import { List } from '../../domain/ListRepository';

class ListRepository implements List {
    async getList(){
        return {
            data: 'Hola'
        }
    }

    private async fetchData(){

    }
}

export default new ListRepository();