import { redirect } from "@remix-run/node";

import type { LoaderFunction } from "@remix-run/node";

import { ROUTE } from "~/utils/enum";

export const loader: LoaderFunction = () => {
  return redirect(ROUTE.SIGN_IN);
};

const HomeRoute = () => {
  return (
    <div>
      <h1>Retrofy</h1>
    </div>
  );
};

export default HomeRoute;
