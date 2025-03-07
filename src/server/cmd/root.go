package cmd

import (
	"goer3/stellar/common"

	"github.com/spf13/cobra"
)

// 命令入口
var rootCmd = &cobra.Command{
	Use:   "stellar",
	Short: common.PROJECT_DESCRIPTION,
}

func Execute() {
	rootCmd.Execute()
}
