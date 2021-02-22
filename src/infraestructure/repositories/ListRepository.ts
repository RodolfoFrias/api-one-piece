import { List } from '../../domain/ListRepository';
import fetch from 'node-fetch';
class ListRepository implements List {

    async getChapters(): Promise<JSON>{
       return await this.fetchChaptersData();
    }

    async getChapter(id: number): Promise<JSON>{
      return await this.fetchChapterData(id);
    }

    private async fetchChaptersData(): Promise<JSON>{
      return fetch('https://onepiececover.com/api/chapters')
      .then(resp => resp.json())
      .then(data => {
          return data;
      }) 
    }

    private async fetchChapterData(id: number): Promise<JSON>{
      return fetch(`https://onepiececover.com/api/chapters/${id}`)
      .then(resp => resp.json())
      .then(data => {
          return data;
      }) 
    }
}

export default new ListRepository();