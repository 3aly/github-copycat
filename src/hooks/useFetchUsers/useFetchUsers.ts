import { queryUsers } from "@services/index";
import { UseQueryOptions, useQuery } from "react-query";

export const useFetchUsers = (rest: UseQueryOptions<{ users: [] }, []>) => {
  const query = useQuery({
    queryKey: ["useFetchUsers"],
    queryFn: () => queryUsers(),
    enabled: true,

    refetchOnWindowFocus: false,

    ...rest,
  });

  return query;
};
