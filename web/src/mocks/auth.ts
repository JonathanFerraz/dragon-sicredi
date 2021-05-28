export const authSingIn = (email: string, password: string) => {
  return new Promise(resolve => {
    setTimeout(() => {
      if (email === 'admin@admin.com' && password === '1234') {
        resolve({
          data: {
            token: 'asdfsdfsdfqrqewrafkaçlçak.aspodiuqlçwẽkrjç.qebfgeasgucnmvb',
            user: {
              name: 'Administrador',
              lastName: 'do Sistema',
              email: 'admin@admin.com',
            },
          },
        });
      } else {
        resolve({
          data: {
            error: 'Credentials fails.',
          },
        });
      }
    }, 2000);
  });
};
