process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ["127.0.0.1"],
    path: "/_next/image",
    loader: "default",
    formats: ["image/avif", "image/webp"],
  },
};

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image";
  },
}));

jest.mock("./modules/api/lib/API", () => ({
  __esModule: true,
  default: jest.fn(),
}));
