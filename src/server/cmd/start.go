package cmd

import (
	"fmt"
	"goer3/stellar/common"

	"github.com/spf13/cobra"
)

// 初始化命令
func init() {
	rootCmd.AddCommand(startCmd)
	startCmd.Flags().StringVarP(&common.ServerListenHost, "host", "H", common.ServerListenHost, "指定服务启动监听地址")
	startCmd.Flags().IntVarP(&common.ServerListenPort, "port", "P", common.ServerListenPort, "指定服务启动监听端口")
	startCmd.Flags().StringVarP(&common.ServerConfigFile, "config", "C", common.ServerConfigFile, "指定服务启动配置文件")
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
