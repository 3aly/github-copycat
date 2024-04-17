import { queryAllUsers } from "@services/index";
import { UseQueryOptions, useQuery } from "react-query";

export const useFetchAllUsers = ({
  onError,
  ...rest
}: {
  onSuccess?: (data: any) => void;
  onError?: (data: any) => void;

  rest?: UseQueryOptions<[], []>;
}) => {
  const query = useQuery({
    queryKey: ["useFetchAllUsers"],
    onError,
    queryFn: () => queryAllUsers(),
    enabled: false,

    refetchOnWindowFocus: false,

    ...rest,
  });

  return query;
};
