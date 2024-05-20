import React, { Suspense } from 'react';
import CocktailDetail from '../pages/CocktailDetail';
import Loading from '../pages/Loading';



const CocktailRouter = () => {
    return [{
        path: 'cocktail/:key  ',
        element: <Suspense fallback={<Loading />} ><CocktailDetail /></Suspense> // 매개변수 전달
    },
    ];
};

export default CocktailRouter;