package cmd

import (
	"fmt"
	"goer3/stellar/common"

	"github.com/spf13/cobra"
)

// 初始化命令
func init() {
	rootCmd.AddCommand(startCmd)
}

// 启动命令
var startCmd = &cobra.Command{
	Use:   "start",
	Short: "启动 Stellar 后端服务",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Print(common.LOGO)
		fmt.Println("Starting server...")
	},
}
