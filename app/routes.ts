import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    {
        path: "quiz",
        file: "routes/quiz.tsx",
    },
      {
        path: "api/lead",
        file: "routes/api.lead.ts",
    },
] satisfies RouteConfig;
