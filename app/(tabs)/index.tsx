import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Image } from "expo-image";
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";

const CATEGORIES = [
  {
    id: "1",
    nameKey: "categories.items.mijang",
    icon: "trowel",
    family: "MaterialCommunityIcons",
  },
  {
    id: "2",
    nameKey: "categories.items.brickwork",
    icon: "wall",
    family: "MaterialCommunityIcons",
  },
  {
    id: "3",
    nameKey: "categories.items.electrician",
    icon: "power-plug",
    family: "MaterialCommunityIcons",
  },
  {
    id: "4",
    nameKey: "categories.items.labor",
    icon: "users",
    family: "Feather",
  },
  {
    id: "5",
    nameKey: "categories.items.painter",
    icon: "paint-roller",
    family: "FontAwesome5",
  },
  {
    id: "6",
    nameKey: "categories.items.carpentry",
    icon: "hammer",
    family: "MaterialCommunityIcons",
  },
  {
    id: "7",
    nameKey: "categories.items.plumbing",
    icon: "pipe",
    family: "MaterialCommunityIcons",
  },
  {
    id: "8",
    nameKey: "categories.items.tiling",
    icon: "view-grid",
    family: "MaterialCommunityIcons",
  },
];

export default function HomeScreen() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");

  // Calculate max width for desktop/tablet
  const isLargeScreen = width > 768;
  const contentMaxWidth = isLargeScreen ? 600 : "100%";

  const renderIcon = (
    family: string,
    name: string,
    color: string,
    size: number,
  ) => {
    switch (family) {
      case "MaterialCommunityIcons":
        return (
          <MaterialCommunityIcons
            name={name as any}
            size={size}
            color={color}
          />
        );
      case "FontAwesome5":
        return <FontAwesome5 name={name as any} size={size} color={color} />;
      case "Feather":
      default:
        return <Feather name={name as any} size={size} color={color} />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      {/* Centered container for desktop support */}
      <View style={styles.rootContainer}>
        <View style={[styles.mainContainer, { maxWidth: contentMaxWidth }]}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.iconButton}>
              <Feather name="menu" size={24} color="#1f2937" />
            </TouchableOpacity>

            <Text style={styles.logoText}>{t("header.logo")}</Text>

            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=11" }}
                style={styles.profileImage}
                contentFit="cover"
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Search & Location Section */}
            <View style={styles.searchSection}>
              {/* Location Selector */}
              <TouchableOpacity style={styles.locationSelector}>
                <View style={styles.locationLeft}>
                  <Feather name="map-pin" size={20} color="#b45309" />
                  <Text style={styles.locationText}>
                    {t("search.location")}
                  </Text>
                </View>
                <Feather name="chevron-down" size={20} color="#9ca3af" />
              </TouchableOpacity>

              {/* Search Bar */}
              <View style={styles.searchBar}>
                <Feather name="search" size={20} color="#9ca3af" />
                <TextInput
                  style={styles.searchInput}
                  placeholder={t("search.placeholder")}
                  placeholderTextColor="#9ca3af"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
            </View>

            {/* Quick Categories */}
            <View style={styles.categoriesSection}>
              <View style={styles.categoriesHeader}>
                <Text style={styles.categoriesTitle}>
                  {t("categories.title")}
                </Text>
                <TouchableOpacity>
                  <Text style={styles.viewAllText}>
                    {t("categories.view_all")}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.categoriesGrid}>
                {CATEGORIES.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    style={styles.categoryItem}
                  >
                    <View style={styles.categoryIconContainer}>
                      {renderIcon(
                        category.family,
                        category.icon,
                        "#92400e",
                        28,
                      )}
                    </View>
                    <Text style={styles.categoryName}>
                      {t(category.nameKey)}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Platform.OS === "web" ? "#1f2937" : "#f9fafb", // Dark background outside on web
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f9fafb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  iconButton: {
    padding: 8,
    marginLeft: -8,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "900",
    color: "#111827",
    letterSpacing: -0.5,
  },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#e5e7eb",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#b45309",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  searchSection: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    gap: 16,
  },
  locationSelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  locationLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  locationText: {
    fontSize: 16,
    color: "#1f2937",
    fontWeight: "500",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#1f2937",
    padding: 0,
  },
  categoriesSection: {
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#b45309",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 16,
  },
  categoryItem: {
    width: "22%", // Roughly 4 items per row with gap
    minWidth: 70,
    alignItems: "center",
    marginBottom: 8,
  },
  categoryIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryName: {
    fontSize: 13,
    color: "#374151",
    fontWeight: "500",
    textAlign: "center",
  },
});
