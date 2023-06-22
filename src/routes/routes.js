import  { lazy, Suspense } from 'react'
import ProductListing from "../Pages/ProductListing";
import PageLayout from "../Layout/PageLayout";
const Cart = lazy(() => import('../Pages/Cart'));

export const routes = [
  {
    path: "/",
    element: (
      <PageLayout>
        <Suspense>
        <ProductListing />
        </Suspense>
      </PageLayout>
    ),
  },
  {
    path: "/cart",
    element: (
      <PageLayout>
      <Suspense>
        <Cart />
      </Suspense>
      </PageLayout>
    ),
  },
];
