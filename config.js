const apiEnv = {
    dev: 'http://localhost:3001/admin/api',
    production: ''
};

export const API_CMS = apiEnv[process.env.NEXT_PUBLIC_ENVIRONMENT];