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
	startCmd.Flags().IntVarP(&common.ServerLeaderRole, "role-leader", "", common.ServerLeaderRole, "指定服务是否参与领导者选举，0: 不参与，1: 参与")
	startCmd.Flags().IntVarP(&common.ServerWorkerRole, "role-worker", "", common.ServerWorkerRole, "指定服务是否开启工作节点角色，0: 不开启，1: 开启")
	startCmd.Flags().IntVarP(&common.ServerWebRole, "role-web", "", common.ServerWebRole, "指定服务是否开启后端服务角色，0: 不开启，1: 开启")
}

// 启动命令
var startCmd = &cobra.Command{
	Use:   "start",
	Short: "启动 Stellar 服务端，可以通过 --help 获取更多的服务启动参数",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Print(common.LOGO)
		fmt.Println("Starting server...")
	},
}
