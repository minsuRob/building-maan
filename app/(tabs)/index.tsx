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

const HIRING_DATA = [
  {
    id: "1",
    tag: "MIJANG / PLASTERING",
    title: "Wall Finishing - Luxury Condo",
    price: "220,000",
    location: "Sinsa-dong",
    time: "07:00",
  },
  {
    id: "2",
    tag: "GENERAL LABOR",
    title: "Site Clearing & Setup",
    price: "160,000",
    location: "Nonhyeon-dong",
    time: "08:00",
  },
  {
    id: "3",
    tag: "ELECTRICIAN",
    title: "Circuit Testing Phase 2",
    price: "250,000",
    location: "Cheongdam-dong",
    time: "07:30",
  },
];

export default function HomeScreen() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();
  const [searchQuery, setSearchQuery] = useState("");

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
              <TouchableOpacity style={styles.locationSelector}>
                <View style={styles.locationLeft}>
                  <Feather name="map-pin" size={20} color="#b45309" />
                  <Text style={styles.locationText}>
                    {t("search.location")}
                  </Text>
                </View>
                <Feather name="chevron-down" size={20} color="#9ca3af" />
              </TouchableOpacity>

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

            {/* Urgent Hiring Section */}
            <View style={styles.hiringSection}>
              <View style={styles.hiringHeader}>
                <MaterialCommunityIcons
                  name="star-four-points"
                  size={20}
                  color="#b45309"
                />
                <Text style={styles.hiringTitle}>
                  {t("hiring.urgent_title")}
                </Text>
              </View>

              {HIRING_DATA.map((item) => (
                <View key={item.id} style={styles.hiringCard}>
                  <View style={styles.cardTopRow}>
                    <View style={styles.tagBadge}>
                      <Text style={styles.tagText}>{item.tag}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                      <Text style={styles.priceValue}>{item.price}</Text>
                      <Text style={styles.priceUnit}>
                        {t("hiring.krw_day")}
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.jobTitle}>{item.title}</Text>

                  <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                      <Feather name="map-pin" size={14} color="#6b7280" />
                      <Text style={styles.infoText}>{item.location}</Text>
                    </View>
                    <View style={styles.infoItem}>
                      <Feather name="clock" size={14} color="#6b7280" />
                      <Text style={styles.infoText}>
                        {t("hiring.starts")} {item.time}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.applyButton}>
                    <Text style={styles.applyButtonText}>
                      {t("hiring.apply_now")}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </ScrollView>

          {/* Floating Action Button */}
          <TouchableOpacity style={styles.fab}>
            <Feather name="plus" size={28} color="#ffffff" />
          </TouchableOpacity>
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
    backgroundColor: Platform.OS === "web" ? "#1f2937" : "#f9fafb",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f9fafb",
    position: "relative",
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
    paddingBottom: 100,
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
    width: "22%",
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
  hiringSection: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  hiringHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
  },
  hiringTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  hiringCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  tagBadge: {
    backgroundColor: "#1f2937",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  tagText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "700",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  priceValue: {
    fontSize: 18,
    fontWeight: "700",
    color: "#b45309",
  },
  priceUnit: {
    fontSize: 10,
    color: "#9ca3af",
    fontWeight: "600",
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    gap: 16,
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    fontSize: 14,
    color: "#6b7280",
    fontWeight: "500",
  },
  applyButton: {
    backgroundColor: "#ed8936",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  applyButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
