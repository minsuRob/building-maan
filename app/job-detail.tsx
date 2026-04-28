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
import { useRouter } from "expo-router";

export default function JobDetailScreen() {
  const { t } = useTranslation();
  const router = useRouter();
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
            <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Feather name="arrow-left" size={24} color="#1f2937" />
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
            {/* Map Placeholder */}
            <View style={styles.mapContainer}>
              <Image
                source={{ uri: "https://maps.googleapis.com/maps/api/staticmap?center=37.5665,126.9780&zoom=15&size=600x300&sensor=false" }}
                style={styles.mapImage}
              />
              <View style={styles.markerContainer}>
                <MaterialCommunityIcons name="map-marker" size={48} color="#9ca3af" />
              </View>
              <View style={styles.locationBadge}>
                <Feather name="map-pin" size={14} color="#ed8936" />
                <Text style={styles.locationBadgeText}>High-rise Site B-12, Sector 4</Text>
              </View>
            </View>

            {/* Job Header Info */}
            <View style={styles.content}>
              <View style={styles.jobInfoCard}>
                <View style={styles.cardHeader}>
                  <View style={styles.urgentBadge}>
                    <Text style={styles.urgentText}>{t("hiring.urgent_badge")}</Text>
                  </View>
                  <TouchableOpacity>
                    <Feather name="bookmark" size={24} color="#9ca3af" />
                  </TouchableOpacity>
                </View>

                <Text style={styles.jobTitle}>Bricklayer for High-rise site</Text>

                <View style={styles.dateTimeRow}>
                  <View style={styles.dateTimeItem}>
                    <View style={styles.iconCircle}>
                      <Feather name="calendar" size={14} color="#1f2937" />
                    </View>
                    <View>
                      <Text style={styles.dateTimeLabel}>{t("job_detail.date")}</Text>
                      <Text style={styles.dateTimeValue}>Oct 24, 2023</Text>
                    </View>
                  </View>
                  <View style={styles.dateTimeItem}>
                    <View style={styles.iconCircle}>
                      <Feather name="clock" size={14} color="#1f2937" />
                    </View>
                    <View>
                      <Text style={styles.dateTimeLabel}>{t("job_detail.shift")}</Text>
                      <Text style={styles.dateTimeValue}>07:30 - 16:30</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.paymentBox}>
                  <View>
                    <Text style={styles.paymentLabel}>{t("job_detail.daily_rate")}</Text>
                    <Text style={styles.paymentValue}>£240.00</Text>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Text style={styles.paymentLabel}>{t("job_detail.payment_terms")}</Text>
                    <Text style={styles.paymentMethod}>{t("job_detail.next_day")}</Text>
                  </View>
                </View>
              </View>

              {/* Required Skills */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <MaterialCommunityIcons name="check-decagram" size={20} color="#111827" />
                  <Text style={styles.sectionTitle}>{t("job_detail.required_skills")}</Text>
                </View>
                <View style={styles.skillsGrid}>
                  <View style={styles.skillCard}>
                    <MaterialCommunityIcons name="card-account-details-outline" size={24} color="#ed8936" />
                    <Text style={styles.skillText}>CSCS Blue Card</Text>
                  </View>
                  <View style={styles.skillCard}>
                    <MaterialCommunityIcons name="account-group-outline" size={24} color="#ed8936" />
                    <Text style={styles.skillText}>Face Fixing Exp.</Text>
                  </View>
                </View>
                <View style={styles.skillFullCard}>
                  <MaterialCommunityIcons name="tools" size={24} color="#ed8936" />
                  <Text style={styles.skillText}>Full Own PPE & Tools Required</Text>
                </View>
              </View>

              {/* Job Description */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Feather name="file-text" size={20} color="#111827" />
                  <Text style={styles.sectionTitle}>{t("job_detail.description")}</Text>
                </View>
                <Text style={styles.descriptionText}>
                  Work involves face fixing brickwork on a new 15-story residential high-rise. Must be able to work at height. Accuracy and speed are essential for this site phase.
                </Text>
                <View style={styles.bulletRow}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>Reporting to Site Foreman at 07:15 for safety briefing.</Text>
                </View>
                <View style={styles.bulletRow}>
                  <View style={styles.bulletDot} />
                  <Text style={styles.bulletText}>Maintaining clean work area and adhering to Site Safety Protocol v4.2.</Text>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Footer Action */}
          <View style={styles.footer}>
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>{t("hiring.confirm_application")}</Text>
              <Feather name="arrow-right" size={20} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#ffffff" },
  rootContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Platform.OS === "web" ? "#1f2937" : "#ffffff",
  },
  mainContainer: { flex: 1, width: "100%", backgroundColor: "#ffffff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#ffffff",
  },
  backButton: { padding: 4 },
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
  scrollContent: { paddingBottom: 100 },
  mapContainer: { height: 240, position: "relative", backgroundColor: "#f3f4f6" },
  mapImage: { width: "100%", height: "100%", opacity: 0.6 },
  markerContainer: {
    position: "absolute",
    top: "40%",
    left: "48%",
  },
  locationBadge: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "#ffffff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#111827",
  },
  locationBadgeText: { fontSize: 12, fontWeight: "700", color: "#111827" },
  content: { padding: 20, marginTop: -30 },
  jobInfoCard: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  urgentBadge: {
    backgroundColor: "#f1f5f9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  urgentText: { fontSize: 10, fontWeight: "800", color: "#111827" },
  jobTitle: { fontSize: 28, fontWeight: "800", color: "#111827", marginBottom: 24 },
  dateTimeRow: { flexDirection: "row", gap: 24, marginBottom: 24 },
  dateTimeItem: { flexDirection: "row", alignItems: "center", gap: 12 },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },
  dateTimeLabel: { fontSize: 10, fontWeight: "700", color: "#9ca3af", textTransform: "uppercase" },
  dateTimeValue: { fontSize: 14, fontWeight: "700", color: "#111827" },
  paymentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff7ed",
    padding: 20,
    borderRadius: 12,
  },
  paymentLabel: { fontSize: 10, fontWeight: "700", color: "#ed8936", marginBottom: 4 },
  paymentValue: { fontSize: 24, fontWeight: "800", color: "#ed8936" },
  paymentMethod: { fontSize: 14, fontWeight: "700", color: "#111827" },
  section: { marginBottom: 32 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: "800", color: "#111827" },
  skillsGrid: { flexDirection: "row", gap: 12, marginBottom: 12 },
  skillCard: {
    flex: 1,
    backgroundColor: "#f9fafb",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    alignItems: "center",
    gap: 8,
  },
  skillFullCard: {
    backgroundColor: "#f9fafb",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#f3f4f6",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  skillText: { fontSize: 12, fontWeight: "700", color: "#111827" },
  descriptionText: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 22,
    fontWeight: "500",
    marginBottom: 16,
  },
  bulletRow: { flexDirection: "row", gap: 12, marginBottom: 8, paddingRight: 20 },
  bulletDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: "#9ca3af", marginTop: 8 },
  bulletText: { fontSize: 14, color: "#6b7280", fontWeight: "500", lineHeight: 20 },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#f3f4f6",
  },
  confirmButton: {
    backgroundColor: "#ed8936",
    paddingVertical: 18,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  confirmButtonText: { color: "#ffffff", fontSize: 16, fontWeight: "800" },
});
