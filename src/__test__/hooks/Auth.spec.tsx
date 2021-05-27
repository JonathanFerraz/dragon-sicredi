import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { useAuth, AuthProvider } from '../../hooks/useAuth';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('Auth hooke', () => {
  it('should be able to sign in', async () => {
    const apiResponse = {
      agencia: null,
      conta: null,
      cooperativa: null,
      escopo: 'interno',
      roles: ['interno'],
      telas: [
        {
          id: '603e87c2b6de6c7e6e7b482e',
          titulo: 'Lorem, ipsum.',
          icone: 'lorem/ipsum/dolor.svg',
          subtitulo: 'Lorem ipsum dolor sit amet.',
          url: '/lorem/ipsum',
        },
      ],
      sessionToken: 'loremipsumdolorsitametconsecteturadipisici',
    };

    const usuario = 'teste';
    const senha = 'teste123';

    apiMock
      .onPost(`sessions?usuario=${usuario}&senha=${senha}`)
      .reply(200, apiResponse);
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      usuario: usuario,
      senha: senha,
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      '@PortalUnicred/sessionToken',
      apiResponse.sessionToken,
    );
    expect(setItemSpy).toHaveBeenCalledWith(
      '@PortalUnicred/user',
      JSON.stringify(apiResponse),
    );
    expect(result.current.user.escopo).toEqual('interno');
  });

  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@PortalUnicred/sessionToken':
          return 'loremipsumdolorsitametconsecteturadipisici';
        case '@PortalUnicred/user':
          return JSON.stringify({
            agencia: null,
            conta: null,
            cooperativa: null,
            escopo: 'interno',
            roles: ['interno'],
            telas: [
              {
                id: '603e87c2b6de6c7e6e7b482e',
                titulo: 'Lorem, ipsum.',
                icone: 'lorem/ipsum/dolor.svg',
                subtitulo: 'Lorem ipsum dolor sit amet.',
                url: '/lorem/ipsum',
              },
            ],
          });
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.escopo).toEqual('interno');
  });

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@PortalUnicred/sessionToken':
          return 'loremipsumdolorsitametconsecteturadipisici';
        case '@PortalUnicred/user':
          return JSON.stringify({
            agencia: null,
            conta: null,
            cooperativa: null,
            escopo: 'interno',
            roles: ['interno'],
            telas: [
              {
                id: '603e87c2b6de6c7e6e7b482e',
                titulo: 'Lorem, ipsum.',
                icone: 'lorem/ipsum/dolor.svg',
                subtitulo: 'Lorem ipsum dolor sit amet.',
                url: '/lorem/ipsum',
              },
            ],
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(2);
    expect(result.current.user).toBeUndefined();
  });
});
