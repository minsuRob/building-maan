import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
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
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

const CONSTRUCTION_CASES = [
  {
    id: "1",
    type: "APARTMENT",
    title: "Interior Tiling - New Apartment Complex",
    location: "Gangnam-gu, Seoul",
    distance: "1.2km",
    pay: "250,000",
    shift: "day_shift",
    term: "long_term",
    skills: ["Tiling", "Glue-on Method"],
    urgent: true,
  },
  {
    id: "2",
    type: "INFRASTRUCTURE",
    title: "Bridge Deck Reinforcement Bar Placement",
    location: "Hanam, Gyeonggi",
    distance: "15.5km",
    pay: "280,000",
    shift: "day_shift",
    term: "short_term",
    skills: ["Rebar", "Structure"],
    urgent: false,
  },
  {
    id: "3",
    type: "COMMERCIAL",
    title: "Department Store Interior Painting (Night)",
    location: "Yeongdeungpo, Seoul",
    distance: "8.4km",
    pay: "320,000",
    shift: "night_shift",
    term: "short_term",
    skills: ["Painter", "Spray Gun"],
    urgent: true,
  },
  {
    id: "4",
    type: "DEMOLITION",
    title: "Old Building Interior Demolition & Clearing",
    location: "Mapo-gu, Seoul",
    distance: "4.1km",
    pay: "180,000",
    shift: "day_shift",
    term: "short_term",
    skills: ["Labor", "Equipment Support"],
    urgent: false,
  },
];

export default function ExploreScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const [activeFilter, setActiveFilter] = useState("all");

  const isLargeScreen = width > 768;
  const contentMaxWidth = isLargeScreen ? 600 : "100%";

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "APARTMENT":
        return (
          <MaterialCommunityIcons
            name="office-building"
            size={20}
            color="#b45309"
          />
        );
      case "INFRASTRUCTURE":
        return <FontAwesome5 name="bridge" size={16} color="#b45309" />;
      case "COMMERCIAL":
        return (
          <MaterialCommunityIcons name="storefront" size={20} color="#b45309" />
        );
      case "DEMOLITION":
        return (
          <MaterialCommunityIcons name="crane" size={20} color="#b45309" />
        );
      default:
        return <Feather name="home" size={20} color="#b45309" />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.rootContainer}>
        <View style={[styles.mainContainer, { maxWidth: contentMaxWidth }]}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.titleText}>{t("job_search.title")}</Text>
            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=11" }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Feather name="search" size={20} color="#9ca3af" />
              <TextInput
                placeholder={t("search.placeholder")}
                style={styles.searchInput}
              />
              <TouchableOpacity>
                <Feather name="sliders" size={20} color="#111827" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Quick Filters */}
          <View style={styles.filterWrapper}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterContainer}
            >
              {["all", "distance", "pay", "latest"].map((filter) => (
                <TouchableOpacity
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  style={[
                    styles.filterTab,
                    activeFilter === filter && styles.filterTabActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterTabText,
                      activeFilter === filter && styles.filterTabTextActive,
                    ]}
                  >
                    {t(`job_search.filter_${filter}`)}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Case Cards */}
            <View style={styles.listContainer}>
              <Text style={styles.sectionTitle}>{t("job_search.near_me")}</Text>

              {CONSTRUCTION_CASES.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.jobCard}
                  onPress={() => router.push("/job-detail")}
                >
                  <View style={styles.cardHeader}>
                    <View style={styles.typeRow}>
                      <View style={styles.typeIconBox}>
                        {getTypeIcon(item.type)}
                      </View>
                      <View style={styles.badgeRow}>
                        <View style={[styles.tag, styles.shiftTag]}>
                          <Text style={styles.tagText}>
                            {t(`job_search.${item.shift}`)}
                          </Text>
                        </View>
                        <View style={[styles.tag, styles.termTag]}>
                          <Text style={styles.tagText}>
                            {t(`job_search.${item.term}`)}
                          </Text>
                        </View>
                        {item.urgent && (
                          <View style={[styles.tag, styles.urgentTag]}>
                            <Text style={styles.urgentTagText}>URGENT</Text>
                          </View>
                        )}
                      </View>
                    </View>
                    <TouchableOpacity>
                      <Feather name="bookmark" size={20} color="#9ca3af" />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.jobTitle} numberOfLines={2}>
                    {item.title}
                  </Text>

                  <View style={styles.locationRow}>
                    <Feather name="map-pin" size={14} color="#6b7280" />
                    <Text style={styles.locationText}>
                      {item.location} • {item.distance}
                    </Text>
                  </View>

                  <View style={styles.skillsRow}>
                    {item.skills.map((skill, idx) => (
                      <View key={idx} style={styles.skillBadge}>
                        <Text style={styles.skillText}>{skill}</Text>
                      </View>
                    ))}
                  </View>

                  <View style={styles.cardFooter}>
                    <View style={styles.payContainer}>
                      <Text style={styles.payLabel}>DAILY RATE</Text>
                      <Text style={styles.payValue}>₩{item.pay}</Text>
                    </View>
                    <TouchableOpacity style={styles.viewButton}>
                      <Feather name="arrow-right" size={18} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#f9fafb" },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Platform.OS === "web" ? "#1f2937" : "#f9fafb",
  },
  mainContainer: { flex: 1, width: "100%", backgroundColor: "#f9fafb" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
  },
  titleText: { fontSize: 24, fontWeight: "800", color: "#111827" },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#b45309",
    overflow: "hidden",
  },
  profileImage: { width: "100%", height: "100%" },
  searchContainer: { padding: 20, backgroundColor: "#ffffff" },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
  },
  searchInput: { flex: 1, fontSize: 16, color: "#1f2937" },
  filterWrapper: { backgroundColor: "#ffffff", paddingBottom: 12 },
  filterContainer: { paddingHorizontal: 20, gap: 8 },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  filterTabActive: { backgroundColor: "#111827", borderColor: "#111827" },
  filterTabText: { fontSize: 14, fontWeight: "600", color: "#6b7280" },
  filterTabTextActive: { color: "#ffffff" },
  scrollContent: { paddingBottom: 40 },
  listContainer: { padding: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 20,
  },
  jobCard: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  typeRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  typeIconBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#fff7ed",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeRow: { flexDirection: "row", gap: 6 },
  tag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 4 },
  shiftTag: { backgroundColor: "#f1f5f9" },
  termTag: { backgroundColor: "#ecfdf5" },
  urgentTag: { backgroundColor: "#fef2f2" },
  tagText: { fontSize: 10, fontWeight: "700", color: "#475569" },
  urgentTagText: { fontSize: 10, fontWeight: "800", color: "#ef4444" },
  jobTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 8,
    lineHeight: 24,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },
  locationText: { fontSize: 14, color: "#6b7280", fontWeight: "500" },
  skillsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  skillBadge: {
    backgroundColor: "#f9fafb",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  skillText: { fontSize: 12, color: "#1f2937", fontWeight: "600" },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
    paddingTop: 16,
  },
  payContainer: { gap: 2 },
  payLabel: { fontSize: 10, fontWeight: "700", color: "#9ca3af" },
  payValue: { fontSize: 20, fontWeight: "800", color: "#b45309" },
  viewButton: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#ed8936",
    justifyContent: "center",
    alignItems: "center",
  },
});
