import { CCard, CCardBody, CCardHeader, CCol } from "@coreui/react";
import { useQueries } from "react-query";
import { extractIdFromUrl } from "../../helpers";

interface Props<T> {
  title: string; // title of the list component
  resource: string; // name of the resource used to extract id from url
  queryFn: (...args: any) => Promise<T>; // function used to fetch data
  queryKey: string; // key used for the query
  items: string[]; // array of urls
  renderItem: (item: T) => React.ReactNode; // function to render each item
}

const List = <T,>({ items, queryFn, queryKey, resource, title, renderItem }: Props<T>) => {
  const queries = useQueries(
    items.map((item) => {
      let id = extractIdFromUrl(item, resource); // extract id from url using the resource name

      return {
        queryKey: [queryKey, id], // key used for each query
        queryFn: () => queryFn(id), // function used to fetch data for each query
        refetchOnWindowFocus: false, // do not refetch data when window regains focus
      };
    })
  );

  return (
    <CCol lg={{ span: 3 }}>
      <CCard style={{ height: "17.6rem" }} className="mb-4 mb-md-0">
        <CCardHeader>
          <p className="mb-4">
            <span className="text-primary font-italic me-1">{title}</span>
          </p>
        </CCardHeader>
        <CCardBody style={{ overflowY: "auto" }}>
          {queries.map((query) => {
            if (!query.isLoading && !query.isError && query.data) return renderItem(query.data); // render each item
          })}
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default List;
