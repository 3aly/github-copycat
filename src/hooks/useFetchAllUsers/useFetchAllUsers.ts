import { queryAllUsers } from "@services/index";
import { UseQueryOptions, useQuery } from "react-query";

export const useFetchAllUsers = (rest: UseQueryOptions<{ users: [] }, []>) => {
  const query = useQuery({
    queryKey: ["useFetchAllUsers"],
    queryFn: () => queryAllUsers(),
    enabled: true,

    refetchOnWindowFocus: false,

    ...rest,
  });

  return query;
};
