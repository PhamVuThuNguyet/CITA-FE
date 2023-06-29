const apiEnv = {
    dev: 'http://localhost:3001/admin/api',
    production: 'http://cita.vku.udn.vn:3001/admin/api'
};

const baseApiEnv = {
    dev: 'http://localhost:3001',
    production: 'http://cita.vku.udn.vn:3001'
}

export const API_CMS = apiEnv[process.env.NEXT_PUBLIC_ENVIRONMENT];
export const API_URL = baseApiEnv[process.env.NEXT_PUBLIC_ENVIRONMENT];