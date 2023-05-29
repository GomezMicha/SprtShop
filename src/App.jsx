import React, { useEffect, lazy, Suspense } from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./pages/header/header.component";
import Spinner from "./components/spinner/spinner.component";
import Footer from "./pages/footer/footer.component";
import ErrorHandler from "./components/error-boundary/error-boundary.component";

import { auth, createUserDocument } from "./firebase/firebase.utils";

import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { setCurrentUser } from "./redux/user/user.actions";
import { fetchUserAsync } from "./redux/user/user.actions";
import { fetchCollectionsAsync } from "./redux/shop/shop.actions";

const ErrorPage = lazy(() => import("./pages/errorpage/errorpage.component"));
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shoppage/shoppage.component"));
const ContactPage = lazy(() =>
  import("./pages/contactpage/contactpage.component")
);
const SignInPage = lazy(() =>
  import("./pages/signinpage/signinpage.component")
);
const SignUpPage = lazy(() =>
  import("./pages/signuppage/signuppage.component")
);
const CheckoutPage = lazy(() =>
  import("./pages/checkoutpage/checkoutpage.component")
);
const CollectionPage = lazy(() =>
  import("./pages/collectionpage/collectionpage.component")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    //
    const unSubscribeFromSnapshot = () => dispatch(fetchCollectionsAsync());

    // onAuthStateChanged observer ensures the Auth object isn't in an intermediate state—such as initialization. If a currentUser isn't signed in is null / currentUser = null.
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        // Create user document in the database.
        await createUserDocument(currentUser);

        // Once user document is created, bring data and update state.
        dispatch(fetchUserAsync(currentUser.uid));
      } else {
        // currentUser = null.
        dispatch(setCurrentUser(currentUser));
      }
    });

    return () => {
      unSubscribeFromAuth();
      unSubscribeFromSnapshot();
    };
  }, [dispatch]);

  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="App">
      <Header currentUser={currentUser} />

      <ErrorHandler>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route index element={<HomePage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="shop/:collectionId" element={<CollectionPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route
              path="signin"
              element={
                currentUser ? (
                  <Navigate to="/" replace={true} />
                ) : (
                  <SignInPage />
                )
              }
            />
            <Route
              path="signup"
              element={
                currentUser ? (
                  <Navigate to="/" replace={true} />
                ) : (
                  <SignUpPage />
                )
              }
            />
            <Route path="checkout" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </ErrorHandler>
      <Footer />
    </div>
  );
}

export default App;
