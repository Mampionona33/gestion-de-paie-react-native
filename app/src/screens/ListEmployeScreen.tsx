import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useQuery } from "react-query";
import employeService from "../services/EmployeServices";
import { ActivityIndicator } from "react-native-paper";
import { DataTable } from "react-native-paper";
import { useAppDispatch } from "../hooks/useReduxHooks";
import { setNotification } from "../redux/notification/notificationReducer";

export default function ListEmployeScreen(): JSX.Element {
  const { data, isFetching, isError, error } = useQuery(
    "listEmploye",
    async () => await employeService.getAll(),
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 8, 10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage, data]);

  if (isError) {
    dispatch(
      setNotification({ message: (error as Error).message, type: "error" }),
    );
  }
  if (isFetching) {
    console.log("isFetching", isFetching);
    return <ActivityIndicator size="large" />;
  }

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data ? data.length : 0);

  if (isFetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nom</DataTable.Title>
        </DataTable.Header>
        {data &&
          data.slice(from, to).map((item: any) => (
            <DataTable.Row key={item.id}>
              <DataTable.Cell>
                <Text>{item.nom}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        {data && data.length > 0 && (
          <>
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.ceil(data.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${data.length}`}
              numberOfItemsPerPageList={numberOfItemsPerPageList}
              numberOfItemsPerPage={itemsPerPage}
              onItemsPerPageChange={onItemsPerPageChange}
              showFastPaginationControls
              selectPageDropdownLabel={"Rows per page"}
            />
          </>
        )}
      </DataTable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
