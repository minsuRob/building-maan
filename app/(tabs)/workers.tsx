import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  useWindowDimensions,
} from "react-native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";

const WORKERS_DATA = [
  {
    id: "1",
    name: "Marcus Thorne",
    role: "MASTER PLASTERER",
    rating: "4.9",
    experience: "14 Years",
    status: "Available",
    statusColor: "#10b981",
    badge: "MASTER",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "2",
    name: "Elias Vance",
    role: "SITE ELECTRICIAN",
    rating: "4.7",
    experience: "8 Years",
    status: "On Job",
    statusColor: "#6b7280",
    badge: "JOURNEYMAN",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "3",
    name: "Silas Kade",
    role: "SENIOR CARPENTER",
    rating: "5.0",
    experience: "22 Years",
    status: "Available",
    statusColor: "#10b981",
    badge: "MASTER",
    image: "https://i.pravatar.cc/150?img=14",
  },
];

export default function WorkersScreen() {
  const { t } = useTranslation();
  const { width } = useWindowDimensions();

  const isLargeScreen = width > 768;
  const contentMaxWidth = isLargeScreen ? 600 : "100%";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <View style={styles.rootContainer}>
        <View style={[styles.mainContainer, { maxWidth: contentMaxWidth }]}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity>
              <Feather name="menu" size={24} color="#1f2937" />
            </TouchableOpacity>
            <Text style={styles.logoText}>{t("header.logo")}</Text>
            <TouchableOpacity style={styles.profileButton}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=11" }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            <View style={styles.content}>
              <Text style={styles.title}>{t("workers.verified_title")}</Text>

              {/* Filters */}
              <View style={styles.filterRow}>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>
                    {t("workers.filter_craft")}
                  </Text>
                  <Feather name="chevron-down" size={16} color="#9ca3af" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>
                    {t("workers.filter_exp")}
                  </Text>
                  <Feather name="chevron-down" size={16} color="#9ca3af" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                  <Text style={styles.filterText}>
                    {t("workers.filter_rating")}
                  </Text>
                  <Feather name="chevron-down" size={16} color="#9ca3af" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterIconButton}>
                  <Feather name="sliders" size={18} color="#ffffff" />
                </TouchableOpacity>
              </View>

              {/* Workers List */}
              {WORKERS_DATA.map((worker) => (
                <View key={worker.id} style={styles.workerCard}>
                  <View style={styles.cardHeader}>
                    <Image
                      source={{ uri: worker.image }}
                      style={styles.workerImage}
                    />
                    <View style={styles.badgeContainer}>
                      <Text style={styles.badgeText}>{worker.badge}</Text>
                    </View>
                  </View>

                  <View style={styles.cardBody}>
                    <View style={styles.nameRow}>
                      <Text style={styles.workerName}>{worker.name}</Text>
                      <View style={styles.ratingRow}>
                        <Feather
                          name="star"
                          size={14}
                          color="#ed8936"
                          fill="#ed8936"
                        />
                        <Text style={styles.ratingText}>{worker.rating}</Text>
                      </View>
                    </View>
                    <Text style={styles.workerRole}>{worker.role}</Text>

                    <View style={styles.statsRow}>
                      <View>
                        <Text style={styles.statsLabel}>
                          {t("workers.experience")}
                        </Text>
                        <Text style={styles.statsValue}>
                          {worker.experience}
                        </Text>
                      </View>
                      <View>
                        <Text style={styles.statsLabel}>
                          {t("workers.status")}
                        </Text>
                        <View style={styles.statusRow}>
                          <View
                            style={[
                              styles.statusDot,
                              { backgroundColor: worker.statusColor },
                            ]}
                          />
                          <Text
                            style={[
                              styles.statsValue,
                              { color: worker.statusColor },
                            ]}
                          >
                            {worker.status === "Available"
                              ? t("workers.available")
                              : t("workers.on_job")}
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={styles.buttonRow}>
                      <TouchableOpacity style={styles.secondaryButton}>
                        <Text style={styles.secondaryButtonText}>
                          {t("workers.view_portfolio")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.primaryButton}>
                        <Text style={styles.primaryButtonText}>
                          {t("workers.hire_now")}
                        </Text>
                        {worker.id === "3" && (
                          <Feather
                            name="user-plus"
                            size={16}
                            color="#ffffff"
                            style={{ marginLeft: 4 }}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#f3f4f6",
  },
  logoText: { fontSize: 20, fontWeight: "900", color: "#111827" },
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#b45309",
    overflow: "hidden",
  },
  profileImage: { width: "100%", height: "100%" },
  scrollContent: { paddingBottom: 40 },
  content: { padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 20,
  },
  filterRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
    alignItems: "center",
  },
  filterButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  filterText: { fontSize: 12, color: "#6b7280", fontWeight: "600" },
  filterIconButton: {
    backgroundColor: "#ed8936",
    width: 40,
    height: 36,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  workerCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  cardHeader: { height: 160, position: "relative" },
  workerImage: { width: "100%", height: "100%" },
  badgeContainer: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: { color: "#ffffff", fontSize: 10, fontWeight: "800" },
  cardBody: { padding: 16 },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  workerName: { fontSize: 20, fontWeight: "700", color: "#111827" },
  ratingRow: { flexDirection: "row", alignItems: "center", gap: 4 },
  ratingText: { fontSize: 14, fontWeight: "700", color: "#111827" },
  workerRole: {
    fontSize: 14,
    fontWeight: "700",
    color: "#b45309",
    marginTop: 2,
    marginBottom: 16,
  },
  statsRow: { flexDirection: "row", gap: 40, marginBottom: 20 },
  statsLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#9ca3af",
    marginBottom: 4,
  },
  statsValue: { fontSize: 14, fontWeight: "700", color: "#1f2937" },
  statusRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  statusDot: { width: 8, height: 8, borderRadius: 4 },
  buttonRow: { flexDirection: "row", gap: 12 },
  secondaryButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    alignItems: "center",
  },
  secondaryButtonText: { fontSize: 14, fontWeight: "700", color: "#1f2937" },
  primaryButton: {
    flex: 1,
    backgroundColor: "#ed8936",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  primaryButtonText: { fontSize: 14, fontWeight: "700", color: "#ffffff" },
});
