import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '3dac2a064emsh50c77a2ffa0fc86p183d20jsna782d789acd0'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers:cryptoApiHeaders})

export const cryptoApi = createApi( { 
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery( { baseUrl } ),
    endpoints: (builder) => ({
        getCryptos: builder.query( { 
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query( { 
            query: (uuid) => createRequest(`/coin/${uuid}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ uuid, timeperiod }) => createRequest(`coin/${uuid}/history?timeperiod=${timeperiod}`),
          }),
    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
