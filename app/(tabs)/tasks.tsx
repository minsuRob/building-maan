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
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import { StatusBar } from "expo-status-bar";

export default function TasksScreen() {
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
            {/* Stats Overview */}
            <View style={styles.statsSection}>
              <View style={styles.statsRow}>
                <View style={styles.statBox}>
                  <Text style={styles.statLabel}>
                    {t("tasks.pending_jobs")}
                  </Text>
                  <View style={styles.statValueRow}>
                    <Text style={styles.statValue}>12</Text>
                    <Feather name="briefcase" size={16} color="#9ca3af" />
                  </View>
                </View>
                <View style={styles.statBox}>
                  <Text style={styles.statLabel}>
                    {t("tasks.completed_today")}
                  </Text>
                  <View style={styles.statValueRow}>
                    <Text style={styles.statValue}>08</Text>
                    <Feather name="check-circle" size={16} color="#10b981" />
                  </View>
                </View>
              </View>

              <View style={styles.totalSettlementCard}>
                <Text style={styles.settlementLabel}>
                  {t("tasks.total_settlement")}
                </Text>
                <View style={styles.settlementValueRow}>
                  <Text style={styles.settlementValue}>$4,850.00</Text>
                  <MaterialCommunityIcons
                    name="wallet-outline"
                    size={20}
                    color="#ffffff"
                  />
                </View>
              </View>
            </View>

            {/* Upcoming Timeline */}
            <View style={styles.timelineSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>
                  {t("tasks.upcoming_timeline")}
                </Text>
                <TouchableOpacity style={styles.scheduleButton}>
                  <Feather name="calendar" size={16} color="#ed8936" />
                  <Text style={styles.scheduleText}>
                    {t("tasks.full_schedule")}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Timeline Item 1 */}
              <View style={styles.timelineItem}>
                <View style={styles.timelineIndicator}>
                  <View style={styles.dotActive} />
                  <View style={styles.line} />
                </View>
                <View style={styles.timelineContent}>
                  <View style={styles.timeTagRow}>
                    <Text style={styles.timeText}>08:00 AM — 11:30 AM</Text>
                    <View style={styles.statusBadgeWork}>
                      <Text style={styles.statusBadgeText}>
                        WORK IN PROGRESS
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.taskTitle}>
                    Foundation Pouring - Site B
                  </Text>
                  <View style={styles.taskInfoRow}>
                    <View style={styles.taskInfoItem}>
                      <Feather name="map-pin" size={14} color="#9ca3af" />
                      <Text style={styles.taskInfoText}>
                        North Industrial Block
                      </Text>
                    </View>
                    <View style={styles.taskInfoItem}>
                      <Feather name="users" size={14} color="#9ca3af" />
                      <Text style={styles.taskInfoText}>4 Workers</Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Timeline Item 2 */}
              <View style={styles.timelineItem}>
                <View style={styles.timelineIndicator}>
                  <View style={styles.dotInactive} />
                  <View style={styles.line} />
                </View>
                <View style={styles.timelineContent}>
                  <View style={styles.timeTagRow}>
                    <Text style={styles.timeText}>12:30 PM — 03:00 PM</Text>
                    <View style={styles.statusBadgeWait}>
                      <Text style={styles.statusBadgeText}>
                        AWAITING CONFIRMATION
                      </Text>
                    </View>
                  </View>
                  <Text style={styles.taskTitle}>
                    Rebar Reinforcement Inspection
                  </Text>
                  <View style={styles.taskInfoRow}>
                    <View style={styles.taskInfoItem}>
                      <Feather name="map-pin" size={14} color="#9ca3af" />
                      <Text style={styles.taskInfoText}>West Wing Level 2</Text>
                    </View>
                    <View style={styles.taskInfoItem}>
                      <Feather name="shield" size={14} color="#9ca3af" />
                      <Text style={styles.taskInfoText}>
                        Safety Protocol #12
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Timeline Item 3 */}
              <View style={styles.timelineItem}>
                <View style={styles.timelineIndicator}>
                  <View style={styles.dotInactive} />
                </View>
                <View style={styles.timelineContent}>
                  <View style={styles.timeTagRow}>
                    <Text style={styles.timeText}>03:30 PM — 05:00 PM</Text>
                    <View style={styles.statusBadgeScheduled}>
                      <Text style={styles.statusBadgeText}>SCHEDULED</Text>
                    </View>
                  </View>
                  <Text style={styles.taskTitle}>Structural Frame Welding</Text>
                </View>
              </View>
            </View>

            {/* Attendance Section */}
            <View style={styles.attendanceSection}>
              <View style={styles.attendanceCard}>
                <View style={styles.qrIconContainer}>
                  <MaterialCommunityIcons
                    name="qrcode-scan"
                    size={32}
                    color="#ed8936"
                  />
                </View>
                <Text style={styles.attendanceTitle}>
                  {t("tasks.site_attendance")}
                </Text>
                <Text style={styles.attendanceSub}>{t("tasks.scan_qr")}</Text>

                <View style={styles.attendanceButtons}>
                  <TouchableOpacity style={styles.checkInButton}>
                    <Feather name="arrow-right" size={18} color="#ffffff" />
                    <Text style={styles.checkInText}>
                      {t("tasks.check_in")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.checkOutButton}>
                    <Feather name="arrow-right" size={18} color="#111827" />
                    <Text style={styles.checkOutText}>
                      {t("tasks.check_out")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  statsSection: { padding: 20, gap: 12 },
  statsRow: { flexDirection: "row", gap: 12 },
  statBox: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  statLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#9ca3af",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  statValueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statValue: { fontSize: 24, fontWeight: "800", color: "#111827" },
  totalSettlementCard: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 12,
  },
  settlementLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#9ca3af",
    marginBottom: 4,
    textTransform: "uppercase",
  },
  settlementValueRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  settlementValue: { fontSize: 24, fontWeight: "800", color: "#ffffff" },
  timelineSection: { padding: 20 },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: { fontSize: 20, fontWeight: "800", color: "#111827" },
  scheduleButton: { flexDirection: "row", alignItems: "center", gap: 4 },
  scheduleText: { fontSize: 14, fontWeight: "700", color: "#ed8936" },
  timelineItem: { flexDirection: "row", gap: 16, marginBottom: 2 },
  timelineIndicator: { alignItems: "center", width: 20 },
  dotActive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ed8936",
    marginTop: 6,
    zIndex: 1,
  },
  dotInactive: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#e5e7eb",
    marginTop: 6,
    zIndex: 1,
  },
  line: { width: 2, flex: 1, backgroundColor: "#f3f4f6", marginVertical: -4 },
  timelineContent: { flex: 1, paddingBottom: 24 },
  timeTagRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  timeText: { fontSize: 12, color: "#9ca3af", fontWeight: "600" },
  statusBadgeWork: {
    backgroundColor: "#111827",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusBadgeWait: {
    backgroundColor: "#1e293b",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusBadgeScheduled: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusBadgeText: { color: "#ffffff", fontSize: 8, fontWeight: "800" },
  taskTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  taskInfoRow: { flexDirection: "row", gap: 16 },
  taskInfoItem: { flexDirection: "row", alignItems: "center", gap: 4 },
  taskInfoText: { fontSize: 12, color: "#9ca3af", fontWeight: "500" },
  attendanceSection: { padding: 20 },
  attendanceCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#f3f4f6",
    borderStyle: "dashed",
  },
  qrIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: "#fff7ed",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  attendanceTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },
  attendanceSub: {
    fontSize: 12,
    color: "#9ca3af",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 18,
  },
  attendanceButtons: { flexDirection: "row", gap: 12, width: "100%" },
  checkInButton: {
    flex: 1,
    backgroundColor: "#ed8936",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
  },
  checkInText: { color: "#ffffff", fontSize: 14, fontWeight: "700" },
  checkOutButton: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#111827",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderRadius: 8,
    gap: 8,
  },
  checkOutText: { color: "#111827", fontSize: 14, fontWeight: "700" },
});
