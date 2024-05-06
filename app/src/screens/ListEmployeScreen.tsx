import * as React from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useQuery } from "react-query";
import employeService from "../services/EmployeServices";
import {
  ActivityIndicator,
  Card,
  IconButton,
  Searchbar,
} from "react-native-paper";
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
  const [numberOfItemsPerPageList] = React.useState([3, 4, 5]);
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [isKeyboardVisible, setKeyboardVisible] =
    React.useState<boolean>(false);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );

  React.useEffect(() => {
    setPage(0);
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [itemsPerPage, data]);

  if (isError) {
    dispatch(
      setNotification({ message: (error as Error).message, type: "error" }),
    );
  }
  if (isFetching) {
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
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Rechercher"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView>
        <View style={styles.tableContainer}>
          <DataTable>
            <DataTable.Header style={styles.dataTableHead}>
              <DataTable.Title>Nom et prénom</DataTable.Title>
              <DataTable.Title>Matricule</DataTable.Title>
            </DataTable.Header>
            {data &&
              data.slice(from, to).map((item: any) => (
                <DataTable.Row key={item.id} style={styles.row}>
                  <DataTable.Cell>
                    <Card style={styles.card}>
                      <Card.Content style={styles.cardContent}>
                        <Text style={styles.cardText}>
                          {item.nom} {item.prenom}
                        </Text>
                        <Text style={styles.cardText}>{item.matricule}</Text>
                      </Card.Content>
                    </Card>
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
          </DataTable>
        </View>
      </ScrollView>
      {!isKeyboardVisible && (
        <View style={styles.iconAddContainer}>
          <IconButton
            icon="plus"
            size={30}
            style={styles.iconAdd}
            onPress={() => {}}
          />
        </View>
      )}
      {!isKeyboardVisible && (
        <View style={styles.paginationContainer}>
          {data && data.length > 0 && (
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
          )}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tableContainer: {
    flex: 1,
  },
  paginationContainer: {
    marginBottom: 20,
  },
  dataTableHead: {
    display: "flex",
    justifyContent: "space-between",
  },
  row: {
    borderWidth: 0,
    paddingVertical: 20,
    height: "auto",
    flex: 1,
  },
  card: {
    width: "100%",
    minHeight: 50,
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconAddContainer: {
    display: "flex",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  iconAdd: {
    color: "white",
    backgroundColor: "#da200d",
    borderRadius: 100,
  },
  cardText: {
    flex: 1,
  },
});
