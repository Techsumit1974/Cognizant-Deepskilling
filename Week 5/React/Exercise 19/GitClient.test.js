import axios from 'axios';
import GitClient from './GitClient';

jest.mock('axios');

describe('Git Client Tests',()=>{

  test('should return repository names for techiesyed',async()=>{
    axios.get.mockResolvedValue({
      data:[
        {name:'RepoOne'},
        {name:'RepoTwo'}
      ]
    });

    const repos=await GitClient.getRepositories('techiesyed');

    expect(repos).toEqual(['RepoOne','RepoTwo']);
    expect(axios.get).toHaveBeenCalled();
  });

});
