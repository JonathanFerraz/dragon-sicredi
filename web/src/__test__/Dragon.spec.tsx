import api from '../mocks/api';

const data = {
  name: 'ReactTest',
  histories: 'ReactTestHistories',
  type: 'ReactTestLibrary',
};

const dataEdit = {
  name: 'ReactTest2',
  histories: 'ReactTestHistories2',
  type: 'ReactTestLibrary2',
};

describe('dragons function create, edit and delete', () => {
  it('should create a dragon', async () => {
    const result = await api.post(`/`, {
      name: data.name,
      histories: data.histories,
      type: data.type,
    });
    expect(result.data).toHaveProperty('name');
    expect(result.data).toHaveProperty('histories');
    expect(result.data).toHaveProperty('type');
  });

  it('should edit an existing dragon', async () => {
    const resultGet = await api.get(`/`);
    const data = resultGet.data;
    const id = data.pop().id;

    const result = await api.put(`/${id}`, {
      name: dataEdit.name,
      histories: dataEdit.histories,
      type: dataEdit.type,
    });
    expect(result.data).toHaveProperty('name');
    expect(result.data).toHaveProperty('histories');
    expect(result.data).toHaveProperty('type');
  });

  it('should delete an existing dragon', async () => {
    const resultGet = await api.get(`/`);
    const data = resultGet.data;
    const id = data.pop().id;

    await api.delete(`/${id}`);
  });
});

export {};
