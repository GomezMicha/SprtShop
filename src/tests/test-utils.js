import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const testCollections = {
  hats: {
    id: "someId-01",
    title: "Hats",
    routeName: "hats",
    items: [
      {
        imageUrl: "https://some-url.com",
        name: "Purple Hat",
        id: "hats-001",
        price: 30,
      },
      {
        imageUrl: "https://some-url2.com",
        name: "Yellow Hat",
        id: "hats-002",
        price: 25,
      },
    ],
  },
  pants: {
    id: "someId-02",
    title: "Pants",
    routeName: "pants",
    items: [
      {
        imageUrl: "https://some-url3.com",
        name: "Red Pants",
        id: "pants-001",
        price: 45,
      },
      {
        imageUrl: "https://some-url4.com",
        name: "Green Pants",
        id: "pants-002",
        price: 50,
      },
    ],
  },
};

// All router objects are passed to this component to render the app and enable the rest of the APIs
export const WrapperWithRouter = (children, route) => {
  const routes = [
    {
      path: "/shop/:collectionId",
      element: children,
    },
  ];
  // Use createMemoryRouter
  const router = createMemoryRouter(routes, {
    initialEntries: ["/", `/shop/${route}`],
    initialIndex: 1,
  });

  return render(<RouterProvider router={router} />);
};
