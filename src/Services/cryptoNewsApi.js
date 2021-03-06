import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsApiHeaders = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': '3dac2a064emsh50c77a2ffa0fc86p183d20jsna782d789acd0'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi( {
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery( { baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query( {
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
});

export const { useGetCryptoNewsQuery, }  = cryptoNewsApi;