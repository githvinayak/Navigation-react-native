import NewFile from "@/components/NewFile";
import { Tabs } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-yellow-200">
      <Text className=" text-yellow-400  font-bold text-4xl">
        Heyj, Tailwind!
      </Text>
      <NewFile />
    </SafeAreaView>
  );
}
