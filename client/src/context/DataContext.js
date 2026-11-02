import { createContext, useEffect, useState } from "react";
import api from "../api/client";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataMatkul, setDataMatkul] = useState([]);
  const [triggerMatkul, setTriggerMatkul] = useState(false);
  const [dataKelas, setDataKelas] = useState([]);
  const [triggerKelas, setTriggerKelas] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [triggerUser, setTriggerUser] = useState(false);
  const [open, setOpen] = useState(true);
  const [kelasFiltered, setKelasFiltered] = useState([]);
  const [randomKrsFiltered, setRandomKrsFiltered] = useState([]);
  const [waktuFiltered, setWaktuFiltered] = useState([]);
  // SelectedIdMatkul dari dashboard
  const [selectedIdMatkul, setSelectedIdMatkul] = useState([]);

  useEffect(() => {
    const getDataMatkul = async () => {
      try {
        const { data } = await api.get("/matkul");
        setDataMatkul(data.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    // getDataMatkul();
  }, [triggerMatkul]);

  const TriggerMatkul = () => {
    setTriggerMatkul(!triggerMatkul);
  };

  useEffect(() => {
    const getDataKelas = async () => {
      try {
        const { data } = await api.get("/kelas");
        console.log(data);
        setDataKelas(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    // getDataKelas();
  }, [triggerKelas]);

  const TriggerKelas = () => {
    setTriggerKelas(!triggerKelas);
  };

  useEffect(() => {
    const getDataUser = async () => {
      try {
        const { data } = await api.get("/user");
        console.log(data);
        setDataUser(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    // getDataUser();
  }, [triggerUser]);

  const TriggerUser = () => {
    setTriggerUser(!triggerUser);
  };

  const SetOpen = () => {
    setOpen(!open);
  };

  const link = {
    admin: {
      user_panel: "/admin/user-panel",
      mata_kuliah: "/admin/mata-kuliah",
      kelas: "/admin/kelas",
    },
    user: {
      random_krs: "/random-krs",
      planning_krs: "/planning-krs",
      my_plan: "/myplan",
    },
  };
  return (
    <DataContext.Provider
      value={{
        dataMatkul,
        dataKelas,
        dataUser,
        TriggerMatkul,
        TriggerKelas,
        TriggerUser,
        open,
        SetOpen,
        link,
        selectedIdMatkul,
        setSelectedIdMatkul,
        kelasFiltered,
        setKelasFiltered,
        randomKrsFiltered,
        setRandomKrsFiltered,

        waktuFiltered,
        setWaktuFiltered,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
