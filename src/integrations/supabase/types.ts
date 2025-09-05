export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ahmedabad_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      ahmedabad_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      bengaluru_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      bengaluru_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      delhi_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      delhi_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      hennur_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      hennur_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      kolkata_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      kolkata_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      koramangala_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      koramangala_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      mumbai_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      mumbai_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      pune_games: {
        Row: {
          date: string
          id: string
        }
        Insert: {
          date: string
          id?: string
        }
        Update: {
          date?: string
          id?: string
        }
        Relationships: []
      }
      pune_players: {
        Row: {
          created_at: string | null
          gotd: number | null
          id: number
          mvp_medals: number | null
          name: string
          total_points: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name: string
          total_points?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          gotd?: number | null
          id?: number
          mvp_medals?: number | null
          name?: string
          total_points?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
